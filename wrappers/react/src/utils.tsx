import React, { ReactNode } from "react";

export type WithSlots<T extends string | never> = {
  [key in `slot-${T}`]?: React.ReactNode;
};

function renderSlot(slotName: string, node: ReactNode) {
  const props = {
    key: slotName,
    slot: slotName,
    style: {
      display: "contents",
    },
  };
  return React.createElement("div", props, node);
}

function mapSlots(
  props: NamedSlotProps,
  fn: (slotName: string, node: ReactNode) => ReactNode,
): ReactNode[] {
  const slots = Object.entries(props).filter(([key]) =>
    key.startsWith("slot-"),
  );
  return slots.map(([key, value]) => {
    const slotName = key.replace("slot-", "").toLowerCase();
    /* SAFETY: By proving that value always is of type ReactNode
     * 1. props is NamedSlotProps
     * 2. NamedSlotProps states keys that start with slot- have ReactNodes for values
     * 3. We consider only keys which startsWith("slot-")
     * 4. Modus ponnes 2,3: gives that value is ReactNode
     * QED
     */
    const node = value as ReactNode;
    return fn(slotName, node);
  });
}

function withoutSlots(p: { [k: string]: any }): { [k: string]: any } {
  return Object.fromEntries(
    Object.entries(p).filter(([k, _v]) => !k.startsWith("slot-")),
  );
}

function renderSlotsOrChildren(props: AutoSlotProps): React.ReactNode {
  if (props.children) {
    return props.children;
  }
  const renderedSlots = mapSlots(props, renderSlot);
  if (renderedSlots.length === 0) {
    return null;
  } else if (renderedSlots.length === 1) {
    return renderedSlots[0];
  } else {
    return renderedSlots;
  }
}

export function createReactWrapper<
  Props extends WithSlots<T> & { children?: ReactNode },
  T extends string,
>(element: string): React.FC<Props> {
  return (props: Props) =>
    React.createElement(
      element,
      withoutSlots(props),
      renderSlotsOrChildren(props),
    );
}
