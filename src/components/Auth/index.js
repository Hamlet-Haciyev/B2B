import { AuthContainer, AuthBox } from "./AuthStyled";
const AuthLayout = ({children}) => {
  return (
    <AuthContainer>
      <AuthBox>
        {children}
      </AuthBox>
    </AuthContainer>
  );
};

export default AuthLayout;
