import { LightGreenBtn } from "@/src/components/Buttons/LightGreenButton";
import { PrimaryButton } from "@/src/components/Buttons/PrimaryButton";

interface PlanToggleProps {
  value: Boolean;
  onClick: () => void;
}

export default function PlanToggle({ value, onClick }: PlanToggleProps) {
  return (
    <div
      style={{ border: "1px solid var(--color-border-green)" }}
      // CHANGE 1: Switched 'flex' to 'grid grid-cols-2' and added fixed width 'w-[340px]'
      className="grid grid-cols-2 w-[340px] rounded-[1.3rem] p-1 items-center cursor-pointer"
    >
      {value ? (
        <>
          {/* Active State (Monthly) */}
          <LightGreenBtn>
            <div className="flex justify-center items-center w-full">
              <div>Monthly</div>
            </div>
          </LightGreenBtn>

          {/* Inactive State (Annually) */}
          <div
            className="flex items-center justify-center w-full"
            onClick={onClick}
          >
            <div className="flex gap-2 items-center">
              <div>Annually</div>
              <span
                className="inline-flex items-center justify-center text-white text-xs font-medium rounded-full"
                style={{
                  background:
                    "radial-gradient(239.95% 185.59% at 63.38% -7.95%, #319B72 0%, #102F23 33.08%, #319B72 97.6%)",
                  padding: "0 8px",
                  height: "1.5rem",
                  boxShadow: "0 1px 1px 0 rgba(5, 25, 18, 0.20)",
                }}
              >
                -20%
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Inactive State (Monthly) */}
          <div
            className="flex items-center justify-center w-full"
            onClick={onClick}
          >
            Monthly
          </div>

          {/* Active State (Annually) */}
          <LightGreenBtn>
            <div className="flex justify-center items-center gap-2 w-full">
              <div>Annually</div>
            <span
              className="inline-flex items-center justify-center text-white text-xs font-medium rounded-full"
              style={{
                background:
                  "radial-gradient(239.95% 185.59% at 63.38% -7.95%, #319B72 0%, #102F23 33.08%, #319B72 97.6%)",
                padding: "0 8px",
                height: "1.5rem",
                boxShadow: "0 1px 1px 0 rgba(5, 25, 18, 0.20)",
              }}
            >
              -20%
            </span>
            </div>
          </LightGreenBtn>
        </>
      )}
    </div>
  );
}
