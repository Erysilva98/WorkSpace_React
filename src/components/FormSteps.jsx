import React from "react";
import { useState } from "react";
import Form01 from "./Form01";
import Form02 from './Form02';
import Form03 from './Form03';
import Form04 from './Form04';
import FormProgress from './FormProgress';

export default function FormSteps() {

    const [step, setStep] = useState(1);
    const [student, setStudent] = useState ( {
        enrollment: '',
        cpf: '',
        name: '',
        motherName: '',
        fatherName: '',
        birthday: '',
        gender: 'Masculino',
        email: '',
        cellphone: '',
        githubProfile: '',
        campusName: '',
        courseName: '',
        currentPeriod: '',
        group: '',
    });

    const chooseForm = () => {
        switch (step) {
          case 1:
            return <Form01 change={setStep} student={student} updateStudent={setStudent} />;
          case 2:
            return <Form02 change={setStep} student={student} updateStudent={setStudent} />;
          case 3:
            return <Form03 change={setStep} student={student} updateStudent={setStudent} />;
          case 4:
            return <Form04 change={setStep} student={student} updateStudent={setStudent} />;
          default:
            return null;
        }
      };

    return (
        <div className="grow flex flex-col items-center p-8">
            <FormProgress step={step} />
            {chooseForm()}
        </div>
    )
}
