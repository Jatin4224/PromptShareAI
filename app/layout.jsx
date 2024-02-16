import "@styles/globals.css"; //import css to enitre application

export const metadata = {
  title: "PromptShare",
  description: "Discover & Share AI Prompts",
};
const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default Rootlayout;