type Props = {
  className?: string;
  showDividers?: boolean;
};

export function ContactInfo({ className, showDividers }: Props) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className={
          showDividers ? "border-b border-b-gray-200 pb-4 mb-4" : "pb-4"
        }
      >
        <div>+48 669 998 340</div>
        <div>ga.finanse@wp.pl</div>
      </div>

      <div
        className={
          showDividers ? "border-b border-b-gray-200 pb-4 mb-4" : "pb-4"
        }
      >
        <div>ul. Świętojańska 59 lok. nr 4</div>
        <div>81-391 Gdynia</div>
      </div>

      <div>
        <div>NIP 5862314868</div>
        <div>REGON 366577954</div>
      </div>
    </div>
  );
}
