"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import Typography from "@/elements/Typography";
import Paper from "@/components/layout/Paper";

function Page() {
  return (
    <div className="w-full">
      <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
        Paper
      </Typography>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Elevation
        </Typography>
        <div className="flex flex-row justify-start w-full max-w-5xl space-x-4">
          <Paper elevation={1}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 1
                </Typography>
          </Paper>
          <Paper elevation={2}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 2
                </Typography>
          </Paper>
          <Paper elevation={3}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 3
                </Typography>
          </Paper>
          <Paper elevation={4}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 4
                </Typography>
          </Paper>
          <Paper elevation={6}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 6
                </Typography>
          </Paper>
          <Paper elevation={8}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 8
                </Typography>
          </Paper>
          <Paper elevation={12}>
                <Typography variant="h2" size="h5" decoration="none">
                    Elevation 12
                </Typography>
          </Paper>
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
        <div className="flex flex-row justify-start w-full max-w-5xl space-x-4">
          <Paper rounded="default">
                <Typography variant="h2" size="h5" decoration="none">
                    Rounded default
                </Typography>
          </Paper>
          <Paper rounded="none">
                <Typography variant="h2" size="h5" decoration="none">
                    Rounded none
                </Typography>
          </Paper>
          <Paper rounded="full">
                <Typography variant="h2" size="h5" decoration="none">
                    Rounded full
                </Typography>
          </Paper>
          <Paper rounded="lg">
                <Typography variant="h2" size="h5" decoration="none">
                    Rounded lg
                </Typography>
          </Paper>
        </div>
      </div>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Stroke
        </Typography>
        <div className="flex flex-row justify-start w-full max-w-5xl space-x-4">
          <Paper>
                <Typography variant="h2" size="h5" decoration="none">
                    Default
                </Typography>
          </Paper>
          <Paper stroke>
                <Typography variant="h2" size="h5" decoration="none">
                    Stroke
                </Typography>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default WithWrapper(Page);
