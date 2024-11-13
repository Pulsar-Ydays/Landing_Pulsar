const Context = () => {
  return (
    <>
      <div className="w-[80%] h-[70vh] bg-green-500 flex items-center justify-center mx-auto">
        <div className="text-white">
          <h2 className="text-3xl">Contexte de l'application</h2>
          <p className="mt-4">
            Voici un texte de contexte pour l'application Pulsar. Il peut
            contenir des informations supplémentaires sur l'application, ses
            fonctionnalités, ou tout autre contenu pertinent.
          </p>
        </div>
      </div>
      <div className="w-[80%] h-[15vh] flex items-center justify-center mx-auto">
        {" "}
        <h1>
          Avec Pulsar, chaque utilisateur peut explorer un environnement
          numérique intuitif, centré sur la simplicité et la personnalisation,
          pour accéder facilement à des solutions pratiques et optimisées pour
          leurs besoins quotidiens. Que ce soit pour le divertissement, la
          gestion de la productivité ou encore la création de contenu, Pulsar a
          pour objectif de repousser les limites et de proposer des services qui
          anticipent les tendances de demain.
        </h1>
      </div>
    </>
  );
};

export default Context;
