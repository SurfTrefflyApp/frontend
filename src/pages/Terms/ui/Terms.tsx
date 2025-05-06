import { useNavigate } from "react-router";

import { useStatusBarColor } from "@/shared/dom/useStatusBarColor";
import { Close } from "@/shared/icons/Close";
import { Button } from "@/shared/ui/button";

export const Terms = () => {
  const navigate = useNavigate();

  useStatusBarColor("--background");

  return (
    <main className="h-svh max-w-4xl mx-auto px-4 py-8 text-gray-800 overflow-y-auto relative">
      <Button
        variant="ghost"
        className="fixed right-8 top-4 md:hidden"
        onClick={() => {
          navigate(-1);
        }}
      >
        <Close className="size-6" />
      </Button>
      <h1 className="text-3xl font-bold mb-6 text-indigo-700 border-b pb-2">
        Пользовательское Соглашение
      </h1>

      <div className="space-y-4 mb-8">
        <p className="text-lg leading-relaxed">
          Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует
          отношения между владельцем treffly.ru (далее Treffly или
          Администрация) с одной стороны и пользователем сайта с другой.
        </p>
        <p className="text-lg leading-relaxed font-medium">
          Сайт Treffly не является средством массовой информации.
        </p>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
        <p className="text-red-700 font-medium">
          <strong>
            Используя сайт, Вы принимаете условия данного соглашения.
          </strong>
          <br />
          <strong>
            Если Вы не принимаете условия данного соглашения, то не используйте
            сайт Treffly!
          </strong>
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2">
          Предмет соглашения
        </h2>
        <p className="mb-4 text-gray-700">
          Администрация предоставляет пользователю право на размещение на сайте
          следующей информации:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Текстовой информации</li>
          <li>Фотоматериалов</li>
          <li>Ссылок на материалы, размещенные на других сайтах</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2">
          Права и обязанности сторон
        </h2>

        <h3 className="text-xl font-medium mt-6 mb-3 text-indigo-500">
          Пользователь имеет право:
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>осуществлять поиск информации на сайте</li>
          <li>получать информацию на сайте</li>
          <li>создавать информацию для сайта</li>
          <li>распространять информацию на сайте</li>
          <li>копировать информацию на другие сайты с указанием источника</li>
          <li>использовать информацию сайта в личных некоммерческих целях</li>
          <li>
            использовать информацию сайта в коммерческих целях без специального
            разрешения
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3 text-indigo-500">
          Администрация имеет право:
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>
            по своему усмотрению и необходимости создавать, изменять, отменять
            правила
          </li>
          <li>ограничивать доступ к любой информации на сайте</li>
          <li>создавать, изменять, удалять информацию</li>
          <li>удалять учетные записи</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3 text-indigo-500">
          Пользователь обязуется:
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>не нарушать работоспособность сайта</li>
          <li>
            не совершать действия, направленные на введение других Пользователей
            в заблуждение
          </li>
          <li>
            не размещать материалы рекламного, эротического, порнографического
            или оскорбительного характера, а также иную информацию, размещение
            которой запрещено или противоречит нормам действующего
            законодательства РФ
          </li>
          <li>
            не использовать скрипты (программы) для автоматизированного сбора
            информации и/или взаимодействия с Сайтом и его Сервисами
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3 text-indigo-500">
          Администрация обязуется:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            поддерживать работоспособность сайта за исключением случаев, когда
            это невозможно по независящим от Администрации причинам.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2">
          Ответственность сторон
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            пользователь лично несет полную ответственность за распространяемую
            им информацию
          </li>
          <li>
            администрация не несет никакой ответственности за услуги,
            предоставляемые третьими лицами
          </li>
          <li>
            в случае возникновения форс-мажорной ситуации (боевые действия,
            чрезвычайное положение, стихийное бедствие и т. д.) Администрация не
            гарантирует сохранность информации, размещённой Пользователем, а
            также бесперебойную работу информационного ресурса
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 border-b pb-2">
          Условия действия Соглашения
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Данное Соглашение вступает в силу при любом использовании данного
            сайта.
          </li>
          <li>
            Соглашение перестает действовать при появлении его новой версии.
          </li>
          <li>
            Администрация оставляет за собой право в одностороннем порядке
            изменять данное соглашение по своему усмотрению.
          </li>
          <li>
            Администрация не оповещает пользователей об изменении в Соглашении.
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
        <p className="text-blue-700 font-medium">
          Дата последнего обновления: 05-03-2025
        </p>
      </div>
    </main>
  );
};
