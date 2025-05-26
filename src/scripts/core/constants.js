import Enum from 'es6-enum';

export const VIEW_TOP = 'topview';
export const VIEW_FRONT = 'frontview';
export const VIEW_RIGHT = 'rightview';
export const VIEW_LEFT = 'leftview';
export const VIEW_ISOMETRY = 'isometryview';

export const WallTypes = Enum('STRAIGHT', 'CURVED');

/** Modes describing what type of project this instance is used for. */
export const ProjectModes = Enum('DEFAULT', 'SAUNA');

