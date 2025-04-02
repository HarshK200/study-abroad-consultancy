import { Input } from "@/components/ui/Input";
import { Label } from "./ui/Label";
import { cn } from "@/utils/cn";
import { DropDownInput } from "./ui/DropdownSelect";
import { CheckBox } from "./ui/Checkbox";

export const ScheduleCallForm = ({
  className,
  formTitle,
}: {
  className?: string;
  formTitle?: string;
}) => {
  const examNames = [
    "GMAT",
    "GRE",
    "SAT",
    "PSAT",
    "LSAT",
    "LNAT",
    "ACT",
    "IELTS",
    "TOEFL",
  ];
  const Destinations = [
    "USA",
    "UK",
    "Canada",
    "Ireland",
    "Germany",
    "New Zealand",
    "Russia",
    "Australia",
    "Singapore",
    "Other",
  ];

  return (
    <form
      className={cn(
        "h-full p-7 sm:p-10 shadow-md lg:shadow-none rounded-md flex flex-col gap-4",
        className,
      )}
    >
      {formTitle && (
        <h1 className="mx-auto my-4 text-2xl font-bold">{formTitle}</h1>
      )}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col w-full">
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" />
        </div>

        <div className="flex flex-col w-full">
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" />
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-fit">
          <Label>Code</Label>
          <DropDownInput
            id="country-code"
            options={["IN +91", "US +1", "UK +44", "FR +33"]}
          />
        </div>

        <div className="flex flex-col w-full">
          <Label htmlFor="phone-no">Phone-no</Label>
          <Input id="phone-no" type="number" />
        </div>
      </div>

      <div className="grid grid-flow-row sm:grid-cols-2 gap-4">
        <ul>
          <h3 className="py-2">Exams you are aiming for:</h3>
          {examNames.map((examName) => {
            return (
              <li key={examName} className="flex items-center gap-4">
                <CheckBox />
                <p>{examName}</p>
              </li>
            );
          })}
        </ul>
        <ul>
          <h3 className="py-2">Destination you wanna go:</h3>
          {Destinations.map((destination) => {
            return (
              <li key={destination} className="flex items-center gap-4">
                <CheckBox />
                <p>{destination}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </form>
  );
};
