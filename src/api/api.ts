const BASE_URL = import.meta.env.VITE_BASE_URL;

type FormType = {
  title: string;
  description: string;
  body: string;
  category: string;
  imageUrl: string;
  minutesRead: string;
};

export const postArticle = async ({
  formProvided,
}: {
  formProvided: FormType;
}) => {
  try {
    const res = await fetch(`${BASE_URL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formProvided,
        body: formProvided.body.split("\n"),
        categories: [formProvided.category],
        minutesRead: Number(formProvided.minutesRead),
      }),
    });

    if (!res.ok) throw new Error("Failed to post");
  } catch (err) {
    console.log(err);
  }
};
