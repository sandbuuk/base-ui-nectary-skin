type AutoSlotProps = { 
  children?: React.ReactNode;
  [key: `slot-${string}`]?: React.ReactNode;
};

export type Slotify<T extends string> = {
  [key in `slot-${T}`]?: React.ReactNode;
};

export function renderSlotsOrChildren(
  props: AutoSlotProps,
): React.ReactNode {
  if (props.children) {
    return props.children;
  }

  const slots = Object.entries(props).filter(([key]) =>
    key.startsWith("slot-"),
  );

  if (slots.length === 0) {
    return null;
  }

  return slots.map(([key, value]) => {
    const slotName = key.replace("slot-", "").toLowerCase();
    return (
      <div key={slotName} data-slot={slotName} style={{ display: "contents" }}>
        {value as React.ReactNode /* SAFETY: Our input type promises that if something is named slot-XXX then it is a ReactNode */} 
      </div>
    );
  });
}
