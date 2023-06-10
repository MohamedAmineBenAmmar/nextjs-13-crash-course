const AboutLayout = ({ children }) => {
  return (
    <div>
        <h1>BANKAI CUSTOM ABOUT LAYOUT</h1>
        {children}
    </div>
  )
}

export default AboutLayout

// This layout that we defined is used for the about module and every submodule defined within the about module.
// If we visit /about/team the about layout will be used for the team page.
// But it can be overridden by defining a layout in the team module.