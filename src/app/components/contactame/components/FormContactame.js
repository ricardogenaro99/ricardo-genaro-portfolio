import { ButtonGray } from "../../../shared/components";
import { FormContactameContainer } from "../styles/StyledComponents";
import { LabelInput, LabelTextArea } from "./LabelTextAreaInput";

const FormContactame = ({ form, onChange, onSubmit, onBlur }) => {
  return (
    <FormContactameContainer onSubmit={onSubmit} noValidate>
      <LabelInput
        name="nombre"
        form={form}
        onChange={onChange}
        onBlur={onBlur}
      />
      <LabelInput
        type="email"
        name="email"
        form={form}
        onChange={onChange}
        onBlur={onBlur}
      />
      <LabelTextArea
        name="mensaje"
        form={form}
        onChange={onChange}
        onBlur={onBlur}
        rows={5}
      />
      <div>
        <ButtonGray onClick={onSubmit} type="submit" id="sendBtn">
          enviar-mensaje
        </ButtonGray>
      </div>
    </FormContactameContainer>
  );
};

export default FormContactame;
