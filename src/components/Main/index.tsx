import * as S from './styles'

const Main = () => (
    <S.Wrapper>
        <S.Logo
            src="/img/reactjs-icon.svg"
            alt="Imagem de um atomo e React Avançado escrito ao lado"
        ></S.Logo>
        <S.Title>React Avançado</S.Title>
        <S.Description>
            TypeScript, ReactJS, NextJS e Styled Components
        </S.Description>
        <S.Ilustration
            src="/img/progressive_app.svg"
            alt="desenvolvedor de frente para tela com codigo"
        />
    </S.Wrapper>
)

export default Main
