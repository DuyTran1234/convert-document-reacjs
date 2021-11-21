import * as React from 'react';
import useStyles from './stylesSelect';
import Select from 'react-select';
import colors from '../../../constants/colors';

export default function SelectConversion(props) {
const {onSelectConversion,conversionSelected,
     optionsTool, isDisabled
     } = props;
const classes = useStyles();

  return (
    <Select
        isDisabled={isDisabled}
        styles={customizeSelect}
        value={conversionSelected || ''}
        onChange={onSelectConversion}
        options={optionsTool}
        isClearable={true}
        placeholder="Select file conversion"
      />
  );
}

const customizeSelect = {
    control: (provided, state) => ({
        ...provided,
        background: colors.white,
        // borderColor: (isError) ? colors.pink : colors.white,
        // marginTop: (isError) ? '10px' : '0px',
        minHeight: '40px',
        height: '40px',
        width:250,
        boxShadow: state.isFocused ? 0 : 0,
        '& focus': {
            borderColor: colors.blue,
        },
        '&:hover': {
            borderColor: colors.blue,
        },
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        display: state.isFocused ? 'flex' : 'none',
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        display: state.isFocused ? 'flex' : 'none',
    }),
    clearIndicator: (provided, state) => ({
        ...provided,
        display: (state.isFocused) ? 'flex' : 'none',
    }),
    placeholder: (provided, state) => ({
        ...provided,
        fontStyle: 'italic',
        display: state.isFocused ? 'flex' : 'none',
        maxWidth: 'calc(100% - 8px)',
        overflow: 'hidden',
        position: 'absolute',
        textOverFlow: 'ellipsis',
        whiteSpace: 'nowrap',
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};