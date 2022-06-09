import { Stack } from "@mui/material";
import { Gas } from "./gas";

interface Props {
  gases: any;
}

export interface IGas {
  initials: string;
  name: string;
  type: string;
}

export const Gases = ({ gases }: Props) => {
  return (
    <Stack direction="row" spacing={2}>
      {gases.map((gas: IGas) => (
        <Gas
          key={gas.name}
          initials={gas.initials}
          name={gas.name}
          type={gas.type}
        />
      ))}
    </Stack>
  );
};
