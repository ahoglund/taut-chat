ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Taut.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Taut.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Taut.Repo)

