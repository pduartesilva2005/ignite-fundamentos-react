type Repository = {
  name: string;
  description: string;
  html_url: string;
};

type RepositoryItemProps = {
  repository: Repository;
};

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} rel="noreferrer" target="_blank">
        Acessar Repositório
      </a>
    </li>
  );
}
