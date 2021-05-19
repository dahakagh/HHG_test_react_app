import { Container } from "./styles";
import { IEmployees } from "../../../../types";

interface IProps extends IEmployees {
  openModal: boolean;
}

// Открывает как модалка
// Компонент-форма
// Тут делает пост запрос с инпутов
// name: $name и так далее
//

export const AddEmployee: React.FC<IProps> = ({ employees, openModal }) => {
  return (
    <Container>
      {openModal ? (
        <div>
          <h1>asdasd</h1>
        </div>
      ) : null}
    </Container>
  );
};
