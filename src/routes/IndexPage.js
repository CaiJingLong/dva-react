import React from 'react';
import { connect } from 'dva';
import Menu from "../components/TopMenu";
import styles from './IndexPage.css';


function IndexPage() {
  return (
    <div className={styles.normal}>
      <Menu />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
