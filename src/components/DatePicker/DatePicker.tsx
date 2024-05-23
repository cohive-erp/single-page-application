import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue() {
    const [value, setValue] = React.useState<Dayjs | null>();
    console.log('value: ' + value?.month());

    const dataFormatada = dayjs(new Date()).format("DD/MM/YYYY");
    console.log("Data formatada com dayjs:", dataFormatada);

    const handleDateChange = (newValue: Dayjs | null) => {
        setValue(newValue);
        console.log("Nova data selecionada:", newValue?.format("DD/MM/YYYY"));

    };




    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                    disableFuture
                    label='Data início'
                    defaultValue={dayjs('2022-04-17')}
                    onChange={handleDateChange}
                    format='DD/MM/YYYY'
                />
                <DatePicker
                    disablePast
                    label='Data fim'
                    defaultValue={dayjs().add(1, 'year')}
                    onChange={handleDateChange}
                    format='DD/MM/YYYY'
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
