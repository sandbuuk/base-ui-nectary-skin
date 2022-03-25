import styled, { keyframes } from 'styled-components'
import { MessageTyping } from './MessageTyping'
import type { FC } from 'react'

export type Message = {
  sender: 'right' | 'left',
  msg: string,
  blur?: boolean,
  typing?: boolean,
}

export type PhonePreviewProps = {
  chats: Message[],
}

const PhonePreviewRoot = styled.div`
  --dots-height: 9px;
  --dots-width-left: 9px;
  --dots-width-right: 70px;
  --dots-distance: 10px;

  flex: 0;
  display: flex;
  position: relative;
  height: 600px;
  width:300px;
  margin: 0px auto;
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;
  
  border: 4px var(--sinch-color-stormy-400) solid;
  border-radius: 40px;

  & * {
    box-sizing: border-box;
  }

  &::before {
    content: "";
    display: block;
    width: var(--dots-height);
    height: var(--dots-width-left);
    position: absolute;
    top: 18px;
    left: 50%;
    margin-left: calc(0px - ( var(--dots-width-right) / 2 ) - var(--dots-distance) - var(--dots-width-left));
    background-color: var(--sinch-color-snow-800);
    border-radius: 9px;
  }

  &::after {
    content: "";
    display: block;
    width: var(--dots-width-right);
    height: var(--dots-height);
    position: absolute;
    top: 18px;
    left: 50%;
    /* negative margin to center in the parent */
    margin-left: calc(0px - ( var(--dots-width-right) / 2 ));
    background-color: var(--sinch-color-snow-800);
    border-radius: 9px;
  }
`

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  border-top: 33px solid transparent;
  border-bottom: 32px solid transparent;
  padding-top: 10px;
  padding-bottom: 10px;
`

const slideIn = keyframes`
  from {
    top: 20px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
`

const MessageBase = styled.div<{$blur?: boolean}>`
  border-radius: 10px;
  margin: 2px 20px;
  padding: 10px;
  width: fit-content;
  max-width: 70%;

  animation: ${slideIn} 1s;
  position: relative;
  word-break: break-word;

  ${({ $blur }) => ($blur == true ? 'filter: blur(4px);' : '')}
`

const MessageLeft = styled(MessageBase)`
  border-top-left-radius: 0;
  background-color: var(--sinch-color-snow-500);
  color: var(--sinch-color-text-default);
`

const MessageRight = styled(MessageBase)`
  margin-left: auto;
  border-top-right-radius: 0;
  background-color: var(--sinch-color-tropical-100);
  color: var(--sinch-color-text-default);

  /* Add extra margin when switching between left and right sender. */
  ${MessageLeft} + &, & + ${MessageLeft} {
    margin-top: 20px;
  }
`

export const PhonePreview: FC<PhonePreviewProps> = ({ chats }): JSX.Element => (
  <PhonePreviewRoot>
    <MessageContainer>
      {chats.map(({ sender, msg, blur, typing }, i) => (msg.length === 0
        // Rendering null instead of filtering out the empty message will make the indexes
        // more stable and prevent unneccessary rerenders.
        ? null
        : (sender == 'left')
          ? typing === true
            ? <MessageTyping key={i}/>
            : <MessageLeft key={i} $blur={blur}>{msg}</MessageLeft>
          : <MessageRight key={i} $blur={blur}>{msg}</MessageRight>
      ))}
    </MessageContainer>
  </PhonePreviewRoot>
)
