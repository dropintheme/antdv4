import React from 'react';
import classNames from 'classnames';

const FlexContainer = React.forwardRef(
    /**
     * @param {Object} props
     * @param {"flex-start"|"flex-end"|"start"|"end"|"center"|"space-around"} props.justify
     * @param {"flex-start"|"flex-end"|"center"|"baseline"|"stretch"} props.align
     * @param {Boolean} props.full
     * @param {String} props.className
     * @param {import('react').RefObject} ref
     *
     */
    ({ justify, align, full, children, className, ...props }, ref) => {
        const classes = ['ant-custom-flex-box'];
        if (className) {
            classes.push(className);
        }
        if (justify) {
            classes.push(`ant-custom-flex-box-justify-${justify}`);
        }
        if (align) {
            classes.push(`ant-custom-flex-box-align-${align}`);
        }
        if (full) {
            classes.push(`ant-custom-flex-box-full`);
        }
        return (
            <div className={classNames(classes)} ref={ref} {...props}>
                {children}
            </div>
        );
    },
);
FlexContainer.displayName = 'FlexContainer';

const FlexAutoGrow = React.forwardRef(
    /**
     * @param {Object} props
     * @param {"flex-start"|"flex-end"|"start"|"end"|"center"|"space-around"} props.justify
     * @param {"flex-start"|"flex-end"|"center"|"baseline"|"stretch"} props.align
     * @param {Boolean} props.full
     * @param {String} props.className
     * @param {import('react').RefObject} ref
     *
     */
    ({ justify, align, full, children, className, ...props }, ref) => {
        const classes = ['ant-custom-flex-box-auto-grow'];
        if (className) {
            classes.push(className);
        }
        if (justify) {
            classes.push(`ant-custom-flex-box-justify-${justify}`);
        }
        if (align) {
            classes.push(`ant-custom-flex-box-align-${align}`);
        }
        if (full) {
            classes.push(`ant-custom-flex-box-full`);
        }
        return (
            <div className={classNames(classes)} ref={ref} {...props}>
                {children}
            </div>
        );
    },
);
FlexAutoGrow.displayName = 'FlexAutoGrow';

const FlexFixed = React.forwardRef(
    /**
     * @param {Object} props
     * @param {"flex-start"|"flex-end"|"start"|"end"|"center"|"space-around"} props.justify
     * @param {"flex-start"|"flex-end"|"center"|"baseline"|"stretch"} props.align
     * @param {Boolean} props.full
     * @param {String} props.className
     * @param {import('react').RefObject} ref
     *
     */
    ({ justify, align, full, children, className, ...props }, ref) => {
        const classes = ['ant-custom-flex-box-fixed-size'];
        if (className) {
            classes.push(className);
        }
        if (justify) {
            classes.push(`ant-custom-flex-box-justify-${justify}`);
        }
        if (align) {
            classes.push(`ant-custom-flex-box-align-${align}`);
        }
        if (full) {
            classes.push(`ant-custom-flex-box-full`);
        }
        return (
            <div className={classNames(classes)} ref={ref} {...props}>
                {children}
            </div>
        );
    },
);
FlexFixed.displayName = 'FlexFixed';

const FlexEqual = React.forwardRef(
    /**
     * @param {Object} props
     * @param {"flex-start"|"flex-end"|"start"|"end"|"center"|"space-around"} props.justify
     * @param {"flex-start"|"flex-end"|"center"|"baseline"|"stretch"} props.align
     * @param {Boolean} props.full
     * @param {String} props.className
     * @param {import('react').RefObject} ref
     *
     */
    ({ justify, align, full, children, className, ...props }, ref) => {
        const classes = ['ant-custom-flex-box-equal-size'];
        if (className) {
            classes.push(className);
        }
        if (justify) {
            classes.push(`ant-custom-flex-box-justify-${justify}`);
        }
        if (align) {
            classes.push(`ant-custom-flex-box-align-${align}`);
        }
        if (full) {
            classes.push(`ant-custom-flex-box-full`);
        }
        return (
            <div className={classNames(classes)} ref={ref} {...props}>
                {children}
            </div>
        );
    },
);
FlexEqual.displayName = 'FlexEqual';

export { FlexContainer, FlexAutoGrow, FlexEqual, FlexFixed };
