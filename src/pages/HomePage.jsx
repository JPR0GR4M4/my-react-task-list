import Header from "../components/Header";

export function HomePage() {
  return (
    <div className="text-2xl mb-20">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to our{" "}
        <span style={{ display: "inline-block" }}>
          <Header />
        </span>
      </h1>
      <p>
        Your ultimate companion for staying organized and maximizing
        productivity! Designed with simplicity and efficiency in mind, our app
        is here to help you effortlessly manage your tasks, set reminders, and
        prioritize your goals. Whether you're a busy professional, a dedicated
        student, or a multitasking parent, our Todo App is the perfect tool to
        streamline your day and bring order to your chaos. Say goodbye to
        scattered sticky notes and overwhelming to-do lists, and say hello to a
        streamlined and intuitive experience that will empower you to accomplish
        more than ever before. Get ready to conquer your tasks with ease and
        reclaim your time with our user-friendly and feature-rich Todo App.
        <b> ¡Start organizing your life today!</b>
      </p>
    </div>
  );
}
