import {createSelector} from 'reselect';

const SelectDirectory= state =>state.directory;

export const selectDirectorySelections= createSelector(
    [SelectDirectory],
    directory=>directory.sections

)