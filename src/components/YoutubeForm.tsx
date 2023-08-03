import { FC, FormEventHandler } from "react";
import { FieldValue, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const YoutubeForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onsubmit = (data: FormValues): void => console.log(data);

  return (
    <>
      {/* <form onSubmit={handleSubmit(onsubmit)}> */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "Username is required",
            minLength: { value: 2, message: "dddfs" },
          })}
        />
        <h2 style={{ textAlign: "left" }}>{errors.username?.message}</h2>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            validate: (fieldValue: any) => {
              return (
                fieldValue !== "tuna@gmail.com" ||
                "Enter a different email adress"
              );
            },
          })}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />
      </div>
      {/* <button>Submit</button> */}
      {/* </form> */}
      <DevTool control={control} />
    </>
  );
};

export default YoutubeForm;
