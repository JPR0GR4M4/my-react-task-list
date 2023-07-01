import Header from "../components/Header";

export function AboutUsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Take Control of Your Busy Life with Our <Header />
      </h1>
      <p className="mb-4">
        At our Todo App, we are dedicated to helping you take control of your
        busy life and achieve your goals with ease. Our app is designed to
        simplify task management and provide a seamless user experience.
      </p>
      <p className="mb-4">
        With our Todo App, you can effortlessly create, organize, and prioritize
        your tasks in one central place. No more sticky notes or scattered lists
        to juggle! Whether you're managing personal projects, professional
        assignments, or everyday tasks, our app keeps everything neatly
        organized and easily accessible.
      </p>
      <h3 className="text-xl font-bold mb-2">Key Features of Our Todo App:</h3>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">
          <strong>Intuitive Interface:</strong> Our clean and easy to use
          interface ensures that managing your tasks is a breeze. Say goodbye to
          complicated navigation and hello to effortless productivity.
        </li>
        <li className="mb-2">
          <strong>Task Prioritization:</strong> Easily prioritize your tasks and
          focus on what's most important. Set due dates, create reminders, and
          never miss a deadline again.
        </li>
        <li className="mb-2">
          <strong>Data Security:</strong> Your privacy and the security of your
          data are our top priorities. Rest assured that your information is
          encrypted and securely stored, giving you peace of mind.
        </li>
      </ol>
    </div>
  );
}
