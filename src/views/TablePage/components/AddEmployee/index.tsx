import { Container } from "./styles";
import { IEmployees } from "../../../../types";

interface IProps extends IEmployees {}

// Открывает как модалка
// Компонент-форма
// Тут делает пост запрос с инпутов
// name: $name и так далее
//

export const AddEmployee: React.FC<IProps> = ({ employees }) => {
  return <Container></Container>;
};
