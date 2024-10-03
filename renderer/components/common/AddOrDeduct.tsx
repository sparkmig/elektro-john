import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  onDeduct: () => void;
  onAdd: () => void;
  value: number;
}>;

const AddOrDeduct = ({ onDeduct, onAdd, value, children }: Props) => {
  return (
    <div className="flex items-center">
      <button
        className="py-2 px-3 border-[1px] bg-gray-100 rounded-l-md"
        onClick={onDeduct}
      >
        -
      </button>
      <div className="border-t-[1px] w-10 border-b-[1px] p-2 text-center">
        {value}
      </div>
      <button
        className="py-2 px-3 aspect-square border-[1px] bg-gray-100 rounded-r-md"
        onClick={onAdd}
      >
        +
      </button>
      {children && <div className="p-2">{children}</div>}
    </div>
  );
};

export default AddOrDeduct;
