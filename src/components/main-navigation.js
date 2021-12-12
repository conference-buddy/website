import React from "react";
import Link from "gatsby-link";
import { StaticImage } from "gatsby-plugin-image";

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = { isScrolled: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY !== 0) {
      this.setState({
        isScrolled: true,
      });
    } else {
      this.setState({
        isScrolled: false,
      });
    }
  }

  scrollToTop(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
  }

  render() {
    let mainWrapperClassNames =
      "MainNav px-sm-4 py-2 px-2 fixed-top d-flex justify-content-between";

    this.state.isScrolled
      ? (mainWrapperClassNames = `${mainWrapperClassNames} MainNav-bg-in`)
      : (mainWrapperClassNames = `${mainWrapperClassNames} MainNav-bg-out`);

    return (
      <nav className={mainWrapperClassNames}>
        <div className="d-none d-sm-block d-flex align-items-center">
          <Link to="/" onClick={(event) => this.scrollToTop(event)}>
            <StaticImage
              className="d-none d-sm-block"
              src="../images/LogoConferenceBuddy_head_small.png"
              alt="Conference Buddy Logo"
            />
          </Link>
        </div>
      </nav>
    );
  }
}

MainNav.propTypes = {
  // className: PropTypes.string,
};

export default MainNav;
