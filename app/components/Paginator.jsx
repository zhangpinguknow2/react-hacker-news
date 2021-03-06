import React from 'react';
import { Link } from 'react-router';

function handleClick() {
  window.setTimeout(() => window.scrollTo(0, 0), 0);
}

class Paginator extends React.Component {

  render() {
    if (this.props.page === 1 && !this.props.hasNext) {
      return null;
    }
    let prevPage = null;
    const prevUrl = { pathname: `${this.props.pathname}` };
    if (this.props.page > 1) {
      prevUrl.query = { page: this.props.page - 1 };
      prevPage = <Link to={prevUrl} onClick={this.handleClick}>Prev</Link>;
    }
    let nextPage = null;
    const nextUrl = { pathname: `${this.props.pathname}` };
    if (this.props.hasNext) {
      nextUrl.query = { page: this.props.page + 1 };
      nextPage = <Link to={nextUrl} onClick={handleClick}>More</Link>;
    }

    return (
      <div className="paginator">
        {prevPage}
        {prevPage && ' | '}
        {nextPage}
      </div>
    );
  }
}

Paginator.propTypes = {
  pathname: React.PropTypes.string.isRequired,
  page: React.PropTypes.number.isRequired,
  hasNext: React.PropTypes.bool.isRequired
};

export default Paginator;
