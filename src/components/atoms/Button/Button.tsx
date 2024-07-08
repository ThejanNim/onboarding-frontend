import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button(props: Readonly<ButtonProps>) {
  return (
    <button
      {...props}
      className={clsx(
        props.className,
        "flex gap-3 w-full justify-center rounded-lg py-[10px] px-4"
      )}
    >
      {props.children}
    </button>
  );
}
