
export const applyStyle_Gutter = (gutter, styles = {}) => {
    switch (gutter) {
        case 'bottom':
            styles['marginBottom'] = "12px";
            break;
        case 'left':
            styles['marginLeft'] = '12px';
            break;
        case 'right':
            styles['marginRight'] = '12px';
            break;
        case 'top':
            styles['marginTop'] = '12px';
            break;
        case 'top-bottom':
            styles['margin'] = '12px 0px';
            break;
        case 'left-right':
            styles['margin'] = '0px 12px';
            break;
        default:
            styles['margin'] = '0px';
    }
    return styles;
}