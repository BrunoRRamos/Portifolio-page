interface ButtonHeaderProps {
  name: string;
}

export function ButtonHeader({ name }: ButtonHeaderProps) {
  return (
    <div className="flex h-9 gap-2 p-1 rounded-full hover:border-2 hover:border-solid hover:border-slate-300 cursor-pointer">
      <span className="font-normal text-white hover:text-slate-300">
        {name}
      </span>
    </div>
  );
}
