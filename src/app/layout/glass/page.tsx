"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import Typography from "@/elements/Typography";
import Glass from "@/components/layout/Glass";
import Paper from "@/components/layout/Paper";

function Page() {
  return (
    <div className="w-full background-circle">
      <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
        Paper
      </Typography>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Elevation
        </Typography>
        <div className="flex flex-row justify-start w-full max-w-5xl flex-wrap gap-4">
          <Paper opacity={10} blur="md" elevation={1}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 1
                </Typography>
          </Paper>
          <Glass blur="md" elevation={2}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 2
                </Typography>
          </Glass>
          <Glass blur="md" elevation={3}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 3
                </Typography>
          </Glass>
          <Glass blur="md" elevation={4}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 4
                </Typography>
          </Glass>
          <Glass elevation={6}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 6
                </Typography>
          </Glass>
          <Glass elevation={8}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 8
                </Typography>
          </Glass>
          <Glass elevation={12}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 12
                </Typography>
          </Glass>
            {/* <div className="w-full p-8 rounded-xl bg-elevation-500">
                <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
                    TITLE
                </Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, vel. Nobis voluptatem aspernatur vero, cum officiis cupiditate nihil accusamus itaque dolore, sunt laborum obcaecati ratione, maxime dicta iusto laboriosam. Perferendis impedit nostrum modi nesciunt, maiores molestiae fugit dignissimos inventore molestias ipsum beatae deserunt maxime optio dolores quod itaque dolore iure esse culpa recusandae fugiat dolorum eligendi praesentium nulla? Sint debitis voluptatibus velit exercitationem obcaecati perspiciatis nihil ratione, dolorem culpa itaque excepturi fugiat, eaque animi optio. Hic illum eius error commodi!
            </div> */}
        </div>
      </div>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Rounded
        </Typography>
        <div className="flex flex-row justify-start w-full max-w-5xl flex-wrap gap-4">
          <Glass rounded="default">
                <Typography variant="h2" size="h5" decoration="none">
                    Rounded default
                </Typography>
          </Glass>
          <Glass rounded="none">
                <Typography variant="h2" size="h5" decoration="none">
                    Rounded none
                </Typography>
          </Glass>
          <Glass rounded="full">
                <Typography variant="h2" size="h5" decoration="none">
                    Rounded full
                </Typography>
          </Glass>
          <Glass rounded="lg">
                <Typography variant="h2" size="h5" decoration="none">
                    Rounded lg
                </Typography>
          </Glass>
        </div>
      </div>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Stroke
        </Typography>
        <div className="flex flex-row justify-start w-full max-w-5xl flex-wrap gap-4">
          <Glass>
                <Typography variant="h2" size="h5" decoration="none">
                    Default
                </Typography>
          </Glass>
          <Glass stroke>
                <Typography variant="h2" size="h5" decoration="none">
                    Stroke
                </Typography>
          </Glass>
        </div>
      </div>
    </div>
  );
}

export default WithWrapper(Page);
