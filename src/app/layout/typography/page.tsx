"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import Typography from "@/elements/Typography";

const TypographyPage = () => {
    return (
        <>
            <div className="flex flex-col">
                <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
                    Typography
                </Typography>
                <div>
                    <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
                        Sizes and variants
                    </Typography>
                    <div className="flex flex-col items-start gap-4">
                    <Typography variant="h1" size="h1" decoration="none" className={"mb-4"}>
                        Size h1
                    </Typography>
                    <Typography variant="h2" size="h2" decoration="none" className={"mb-4"}>
                        Size h2
                    </Typography>
                    <Typography variant="h3" size="h3" decoration="none" className={"mb-4"}>
                        Size h3
                    </Typography>
                    <Typography variant="h4" size="h4" decoration="none" className={"mb-4"}>
                        Size h4
                    </Typography>
                    <Typography variant="h5" size="h5" decoration="none" className={"mb-4"}>
                        Size h5
                    </Typography>
                    <Typography variant="h6" size="h6" decoration="none" className={"mb-4"}>
                        Size h6
                    </Typography>
                    </div>
                </div>
                <div>
                    <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
                        Decoration
                    </Typography>
                    <div className="flex flex-col items-start gap-4">
                        <Typography variant="h3" size="h3" decoration="lineBot" className={"mb-4"}>
                            With line bottom
                        </Typography>
                        <Typography variant="h3" size="h3" decoration="lineTop" className={"mb-4"}>
                            With line top
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WithWrapper(TypographyPage);
