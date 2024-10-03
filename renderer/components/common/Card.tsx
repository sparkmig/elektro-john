import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  shadowOnHover?: boolean;
  shadow?: "shadow-md" | "";
}>;

const Card = ({ children, shadowOnHover = false, shadow = "" }: Props) => {
  return (
    <div
      className={`p-2 border-[1px] border-gray-200 rounded-md transition-shadow ease-in flex flex-col ${
        shadowOnHover ? "hover:shadow-md" : shadow
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
