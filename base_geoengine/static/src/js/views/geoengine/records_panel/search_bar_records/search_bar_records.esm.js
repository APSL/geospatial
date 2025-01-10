/** @odoo-module */

/**
 * Copyright 2023 ACSONE SA/NV
 */

const {Component} = owl;
const {useRef} = owl.hooks;

export class SearchBarRecords extends Component {
    setup() {
        this.searchComponentRef = useRef("searchComponent");
    }

    /**
     * When a key is pressed, the props onInputKeyup method is called.
     * @param {*} ev
     */
    onInputKeyup(ev) {
        this.props.onInputKeyup(this.searchComponentRef.el.value);
        ev.preventDefault();
        ev.stopPropagation();
    }
}

SearchBarRecords.template = "base_geoengine.SearchBarRecords";
