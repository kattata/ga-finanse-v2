import Image from "next/image";

type Props = {
  loading?: "eager" | "lazy" | undefined;
};

export function Logo({ loading = "eager" }: Props) {
  return (
    <Image
      src="/icons/ga-finanse.png"
      alt="GA Finanse Logo"
      width={105}
      height={35}
      loading={loading}
    />
  );
}
