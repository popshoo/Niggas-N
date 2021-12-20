import PropTypes from 'prop-types'
import { ProfileInfo } from './ProfileInfo';
import styles from './Tag.Module.css';

const Tag = ({text}) => {
    return (
        <div className={styles.tag}>
            {text}
        </div>
    )
}

Tag.propTypes = {
    text: PropTypes.string.isRequired,
};

export {Tag};