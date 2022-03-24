import { useContext } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { ModalContext } from '../../contexts'
import pointsImage from './pointsimage.png'
import type { FC } from 'react'

const ModalContainer = styled.section`
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  background-color: #ffffff;
  box-shadow: 0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  & * {
    box-sizing: border-box;
  }
`

const Header = styled.header`
  height: 220px;
  background-color: #F1F3F4;

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 20%;
    margin-top: 0%;
    margin-bottom: 5%;
  }
`

const HeaderCloseButton = styled.button`
  margin-left: 95%;
  cursor: pointer;
  border-radius: 50%;
  color: black;
  border: none;
  width: 30px;
  height: 30px;
  font-weight: bold;
  align-self: center;
  background-color: transparent;
`

const HeaderFlag = styled.div`
  position: absolute;
  top: 36px;
  padding: 4px 16px;
  background-color: var(--sinch-color-honey-500);
  color: black;
`

const Main = styled.main`
  flex: 8;
  background-color: #ffffff;

  & h2 {
    color: #677784;
    font-size: 16px;
    text-align: center;
  }
  & h3 {
    font-size: 24px;
    text-align: center;
    font-weight: 600;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;

`

const ListItem = styled.div`
  display: flex;
  flex-direction: row;

  & > img {
    margin: 3%;
    margin-left: 5%;
    margin-right: 2%;
    height: 15px;
    width: 15px;
  }
  & > p {
    font: var(--sinch-font-extra-small-text);
    font-size: 14px;
    margin-right: 15%;
  }
`

const Footer = styled.footer`
  display: flex;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  margin: 0% 1% 1%;

  & > * {
    margin: 3%;
  }
`

type Props = {
  bodyContent: string[],
  close: (value: any) => void,
  isComingSoon?: boolean,
  headerbgcolor: string,
  headerTextColor: string,
  heading: string,
  headingContent: string,
  imagesource: string|undefined,
  next: (event: React.MouseEvent<HTMLElement>) => void,
}

export const Modal: FC<Props> = ({ next, close, headerbgcolor, headerTextColor, imagesource, isComingSoon, heading, headingContent, bodyContent }) => {
  const modalElement = useContext(ModalContext)

  return modalElement == null
    ? null
    : createPortal(
      <ModalContainer>
        <Header style={{ backgroundColor: headerbgcolor }}>
          <HeaderCloseButton onClick={close} style={{ color: headerTextColor }}>
            X
          </HeaderCloseButton>
          {isComingSoon == true && (
            <HeaderFlag>
              Soon
            </HeaderFlag>
          )}
          <img src={imagesource}/>
        </Header>

        <Main>
          <h2>{heading}</h2>
          <h3>{headingContent}</h3>
          <MainContent>
            {bodyContent.map((content, i) => {
              return (
                <ListItem key={i}>
                  <img src={pointsImage}/>
                  <p>{content}</p>
                </ListItem>
              )
            })}
          </MainContent>
        </Main>

        <Footer>
          <sinch-button
            type="secondary"
            text="Cancel"
            aria-label="Cancel"
            onClick={close}
            small
          />
          <sinch-button
            type="primary"
            text="Continue"
            aria-label="Continue"
            onClick={next}
            small
            disabled={isComingSoon}
          />
        </Footer>
      </ModalContainer>,
      modalElement.current as Element
    )
}
