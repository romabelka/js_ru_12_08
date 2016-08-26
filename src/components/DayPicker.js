import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const weekdaysLong = {
    // Make sure you start with the right day of the week!
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};
const weekdaysShort = {
    // Idem
    ru: ['По', 'Вт', 'Ср', 'Че', 'Пя', 'Су', 'Во'],
    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};
const months = {
    ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'ноябрь', 'Декабрь'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
const firstDayOfWeek = {
    ru: 1,
    en: 0,
};

const localeUtils = {
    formatDay: (d, locale = 'en') =>
        `${weekdaysLong[locale][d.getDay()]}, ${d.getDate()} ${months[locale][d.getMonth()]} ${d.getFullYear()}`,
    formatWeekdayShort: (index, locale = 'en') => weekdaysShort[locale][index],
    formatWeekdayLong: (index, locale = 'en') => weekdaysLong[locale][index],
    getFirstDayOfWeek: (locale) => firstDayOfWeek[locale],
    getMonths: (locale) => months[locale],
    formatMonthTitle: (d, locale) => `${months[locale][d.getMonth()]} ${d.getFullYear()}`,
};

export default class LocalizedCustom extends React.Component {

    constructor(props) {
        super(props);
        this.switchLocale = this.switchLocale.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    state = {
        from: null,
        to: null,
        locale: 'ru',
    };

    switchLocale(e) {
        const locale = e.target.value || 'en';
        this.setState({ locale });
    }

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    handleResetClick(e) {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }

    render() {
        const { locale } = this.state;
        const { from, to } = this.state;

        return (
            <div className="RangeExample">
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                <p>
                    You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                    { ' ' }<a href="#" onClick={ this.handleResetClick }>Reset</a>
                </p>
                }
                <p>
                    <select onChange={ this.switchLocale }>
                        <option value="ru">Русский (Russian)</option>
                        <option value="en">English</option>
                    </select>
                </p>
                <DayPicker
                    locale={ locale }
                    localeUtils={ localeUtils }
                    modifiers={ { sunday: day => day.getDay() === 0 } }
                    ref="daypicker"
                    numberOfMonths={ 2 }
                    {/*Лучше эту функцию сохранить как метод, а то и код в JSX лишний, и каждый раз пересоздается*/}
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
            </div>
        );
    }

}
