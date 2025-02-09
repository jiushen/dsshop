<?php
namespace App\Models\v1;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
/**
 * @property int id
 * @property int user_id
 * @property int total
 * @property int available
 */
class Integral extends Model
{
    use SoftDeletes;
    public static $withoutAppends = true;
    /**
     * Prepare a date for array / JSON serialization.
     *
     * @param \DateTimeInterface $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function User()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
