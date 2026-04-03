type Props = {
  children: React.ReactNode;
};

export function Button({ children }: Props) {
  return (
    <button className="bg-primary-navy py-3 px-5 text-white font-medium rounded-sm">
      {children}
    </button>
  );
}
