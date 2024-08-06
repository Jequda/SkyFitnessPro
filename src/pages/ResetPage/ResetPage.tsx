import PopReset from "../../components/popups/PopReset/PopReset";

export default function SigninPage() {
  return (
    <PopReset
      onClose={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}
