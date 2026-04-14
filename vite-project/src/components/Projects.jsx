function Projects() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Projects</h2>

      {/* Project 1 */}
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <h3>PTA Tax Calculator</h3>
        <p>Calculate mobile tax easily using simple logic.</p>
        <a href="https://github.com/nimramazhar985-bit/php-assigment">GitHub</a> | <a href="https://php-assigment-jgh9bddgx-nimramazhar985-bits-projects.vercel.app">Live Demo</a>
      </div>

      {/* Project 2 */}
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <h3>Event Invitation Page</h3>
        <p>
          Created an HTML invitation page and linked external CSS using the
          &lt;link&gt; tag. Learned how HTML and CSS communicate.
        </p>
        <a href="https://github.com/nimramazhar985-bit/birthday.html">GitHub</a> | <a href="https://birthday-jgh9bddgx-nimramazhar985-bits-projects.vercel.app">Live Demo</a>
      </div>

      {/* Project 3 */}
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <h3>Ramadan Grocery List App</h3>
        <p>
          Built a dynamic grocery list using JavaScript and Bootstrap 5.
          Items are added dynamically using DOM manipulation.
        </p>
        <a href="https://github.com/nimramazhar985-bit/grocery-list">GitHub</a> | <a href="#">Live Demo</a>
      </div>

      {/* Project 4 */}
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <h3>Liberty Chowk Challan System (Fun UI Form)</h3>
        <p>
          Designed a challan issuance form for wardens with inputs like Driver Name,
          Vehicle Number, and Violation Type (No Helmet, Signal Break, One-Wheeling).
          One-Wheeling option highlights price field in red for warning effect.
          Added a disabled humorous button "Maafi De Dein Sir" for UI practice.
          Used Bootstrap Input Groups to properly display currency (Rs.) inside input fields.
        </p>
        <a href="https://github.com/nimramazhar985-bit/traffic.html">GitHub</a> | <a href="#">Live Demo</a>
      </div>

    </div>
  );
}

export default Projects;