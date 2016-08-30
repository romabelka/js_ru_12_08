import { CHANGE_DATE_FILTER, CHANGE_SELECTED_FILTER } from '../constants'

const defaultFilters = {
    selected: [],
    dates: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case CHANGE_SELECTED_FILTER:
            return { ...filters, selected: payload.ids }

        case CHANGE_DATE_FILTER:
            return { ...filters, ...payload }
    }

    return filters
}