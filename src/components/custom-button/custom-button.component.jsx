import React from "react";
import "./custom-button.style.scss";
import { CustomButtonContainer } from './custom-button.styles'

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) {
  return (
    <div>
      <button
        className={` ${inverted ? 'inverted' :  ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
}

// export default function CustomButton({children, ...props}) {
//   return (
//       <CustomButtonContainer {...props}>
//         {children}
//       </CustomButtonContainer>
//   );
// }
