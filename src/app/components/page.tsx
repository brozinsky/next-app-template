import Typography from "@/elements/Typography";

export default function Components() {
  return (
    <div>
      <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
        Hello
      </Typography>
      <Typography variant="h3" center={true} decoration="none" size="sm" className="text-red-400">
        components
      </Typography>
    </div>
  );
}
