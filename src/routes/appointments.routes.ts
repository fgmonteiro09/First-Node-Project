import { Router } from "express";
import {v4 as uuid } from "uuid";
import { startOfHour, parseISO, isEqual } from "date-fns";

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request,response) => {
    const { provider, date } = request.body;

    const parsedDate = startOfHour(parseISO(date));
    const findAppointmentInSameDate = appointments.find(appointment => isEqual(parsedDate,appointment.date))

    const appointment = {
      id: uuid(),
      provider,
      date: parsedDate,
    };
    appointments.push(appointment);
    return response.json({ message:'hi'});
});

export default appointmentsRouter;
