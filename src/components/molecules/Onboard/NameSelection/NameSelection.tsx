import { Button } from "@/components/atoms/Button";
import { useOnboard } from "../useOnboard";

interface NameSelectionProps {
  onNextStep: () => void;
}

export function NameSelection(props: Readonly<NameSelectionProps>) {
  const { userData, setUserData } = useOnboard();
  return (
    <div className="flex flex-col gap-10 w-[488px]">
      <div className="flex flex-col gap-8">
        <h2 className="font-medium text-4xl">What should we call you?</h2>
        <div className="pb-5 border-b border-[#E5E7EB]">
          <input
            type="text"
            placeholder="type here"
            className="text-[#D0D5DD] font-medium text-6xl outline-none"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </div>
      </div>
      <div>
        <Button
          className="w-32 bg-[#7F56D9] text-white"
          onClick={props.onNextStep}
        >
          Verify
        </Button>
      </div>
    </div>
  );
}
