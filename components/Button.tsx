import { Button } from "@rneui/themed";

interface ButtonProps {
  title: string;
  type?: "solid" | "clear" | "outline";
  width?: number;
  onPress: () => void;
}

export default function ButtonComponent({
  title,
  type = "solid",
  width,
  onPress,
}: ButtonProps) {
  return (
    <>
      <Button
        onPress={onPress}
        title={title}
        type={type ? type : "solid"}
        buttonStyle={{
          width: width ?? 200,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: type === "solid" ? "#2aca7a" : "none",
        }}
        titleStyle={{ color: type === "solid" ? "#ffffff" : "#000000" }}
      />
    </>
  );
}
